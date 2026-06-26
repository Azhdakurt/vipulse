// Runs the JavaScript only after the full HTML page has loaded
document.addEventListener("DOMContentLoaded", () => {
  // Detect current page
  const currentPage = window.location.pathname;

  // Main form element used to collect player review data
  const playerForm = document.getElementById("player-review-form");

  // Recommendation panel elements that will be updated after form submission
  const bonusStatus = document.getElementById("bonus-status");
  const churnStatus = document.getElementById("churn-status");
  const segmentStatus = document.getElementById("segment-status");
  const recommendationText = document.getElementById("recommendation-text");
  const rgStatus = document.getElementById("rg-status");

  // Success message element
  const successMessage = document.getElementById("success-message");

  // Dashboard summary card elements
  const activeVipsCount = document.getElementById("active-vips-count");
  const bonusReviewsCount = document.getElementById("bonus-reviews-count");
  const churnAlertsCount = document.getElementById("churn-alerts-count");
  const rgReviewsCount = document.getElementById("rg-reviews-count");

  // Form fields used for inline validation
  const playerIdInput = document.getElementById("player-id");
  const vipTierInput = document.getElementById("vip-tier");
  const totalDepositInput = document.getElementById("total-deposit");
  const wageringInput = document.getElementById("wagering-completion");
  const lastActiveInput = document.getElementById("last-active-days");
  const activityTrendInput = document.getElementById("activity-trend");
  const lastBonusInput = document.getElementById("last-bonus-days");

  // Saved reviews section elements
  const savedReviewsContainer = document.getElementById(
    "saved-reviews-container",
  );
  const clearReviewsButton = document.getElementById("clear-reviews-btn");

  // Search and filter elements
  const searchPlayerInput = document.getElementById("search-player");
  const filterTierInput = document.getElementById("filter-tier");
  const filterChurnInput = document.getElementById("filter-churn");
  const clearFiltersButton = document.getElementById("clear-filters-btn");

  // Global search elements
  const globalSearchForm = document.getElementById("global-search-form");
  const globalPlayerSearch = document.getElementById("global-player-search");
  const searchErrorMessage = document.getElementById("search-error-message");

  // Load player profile when the user opens the profiles page
  if (currentPage.includes("profiles.html")) {
    loadPlayerProfile();
  }

  // Load analytics data when the user opens the analytics page
  if (currentPage.includes("analytics.html")) {
    loadAnalyticsPage();
  }

  // Load customer preview when the user opens the customer preview page
  if (currentPage.includes("customer-preview.html")) {
    loadCustomerPreview();
  }

  // Load existing saved reviews from localStorage, or start with an empty array
  let savedReviews = JSON.parse(localStorage.getItem("vipulseReviews")) || [];

  // Show any previously saved reviews when the page loads
  renderSavedReviews();
  updateDashboardCards();

  // Runs when the user submits the player review form
  playerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Collect user input values from the form
    const playerId = document.getElementById("player-id").value.trim();
    const vipTier = document.getElementById("vip-tier").value;

    const totalDepositValue = document.getElementById("total-deposit").value;
    const totalDeposit = Number(totalDepositValue);

    const wageringValue = document.getElementById("wagering-completion").value;
    const wageringCompletion = Number(wageringValue);

    const lastActiveValue = document.getElementById("last-active-days").value;
    const lastActiveDays = Number(lastActiveValue);

    const lastBonusValue = document.getElementById("last-bonus-days").value;
    const lastBonusDays = Number(lastBonusValue);

    const activityTrend = document.getElementById("activity-trend").value;
    const rgRisk = document.getElementById("rg-risk").checked;

    // Remove previous validation states before running new checks
    clearValidation();

    let isValid = true;

    // Player ID validation
    if (!playerId) {
      showValidationError(playerIdInput);
      isValid = false;
    }

    // VIP tier validation
    if (!vipTier) {
      showValidationError(vipTierInput);
      isValid = false;
    }

    // Total deposit validation
    if (totalDepositValue === "" || totalDeposit < 0) {
      showValidationError(totalDepositInput);
      isValid = false;
    }

    // Wagering validation
    if (
      wageringValue === "" ||
      wageringCompletion < 0 ||
      wageringCompletion > 100
    ) {
      showValidationError(wageringInput);
      isValid = false;
    }

    // Last active days validation
    if (lastActiveValue === "" || lastActiveDays < 0) {
      showValidationError(lastActiveInput);
      isValid = false;
    }

    // Last bonus days validation
    if (lastBonusValue === "" || lastBonusDays < 0) {
      showValidationError(lastBonusInput);
      isValid = false;
    }

    // Activity trend validation
    if (!activityTrend) {
      showValidationError(activityTrendInput);
      isValid = false;
    }

    // Stop form submission if validation fails
    if (!isValid) {
      recommendationText.textContent =
        "Please correct the highlighted fields before running the VIP review.";
      successMessage.classList.remove("show");
      return;
    }

    // If RG risk is selected, it overrides all bonus/retention recommendations
    if (rgRisk) {
      updateStatus(bonusStatus, "Do not offer bonus", "danger");
      updateStatus(churnStatus, "Manual review", "warning");
      updateStatus(segmentStatus, "RG Review", "danger");

      recommendationText.textContent =
        "Responsible gambling indicator is present. Do not offer promotional rewards. Escalate the player for manual safer gambling review.";
      rgStatus.textContent = "Responsible gambling review required.";
    } else {
      // Bonus eligibility logic based on wagering completion percentage
      if (lastBonusDays <= 7) {
        updateStatus(bonusStatus, "Recent bonus awarded", "warning");
      } else if (wageringCompletion < 70) {
        updateStatus(bonusStatus, "Not eligible yet", "warning");
      } else {
        updateStatus(bonusStatus, "Eligible for review", "success");
      }

      // Churn risk logic based on inactivity and activity trend
      if (lastActiveDays >= 14 || activityTrend === "inactive") {
        updateStatus(churnStatus, "High risk", "danger");
      } else if (activityTrend === "decreasing") {
        updateStatus(churnStatus, "Medium risk", "warning");
      } else {
        updateStatus(churnStatus, "Low risk", "success");
      }

      // Behaviour segmentation logic for internal VIP team review
      if (lastActiveDays >= 21 || activityTrend === "inactive") {
        updateStatus(segmentStatus, "Dormant", "danger");
      } else if (totalDeposit >= 5000 && wageringCompletion >= 70) {
        updateStatus(segmentStatus, "High Value", "success");
      } else if (activityTrend === "decreasing") {
        updateStatus(segmentStatus, "Retention Risk", "warning");
      } else {
        updateStatus(segmentStatus, "Standard Review", "neutral");
      }

      // Professional internal recommendation text based on player activity
      if (lastBonusDays <= 7) {
        recommendationText.textContent =
          "Player received a recent bonus. Review previous engagement activity before considering additional rewards.";
      } else if (lastActiveDays >= 14 || activityTrend === "inactive") {
        recommendationText.textContent =
          "Player shows inactivity risk. Recommend a retention follow-up before considering further bonus activity.";
      } else if (activityTrend === "decreasing") {
        recommendationText.textContent =
          "Player activity is decreasing. Recommend personalised engagement and review recent activity before offering rewards.";
      } else if (wageringCompletion < 70) {
        recommendationText.textContent =
          "Player has not completed wagering requirements. Bonus review should remain pending until wagering improves.";
      } else {
        recommendationText.textContent =
          "Player meets the basic review conditions. Proceed with manual VIP review based on internal policy.";
      }

      // Default safer gambling message when no RG risk is selected
      rgStatus.textContent = "No responsible gambling concerns identified.";
    }

    // Create one review object from the submitted form and generated results
    const review = {
      id: Date.now(),
      playerId,
      vipTier,
      totalDeposit,
      wageringCompletion,
      lastActiveDays,
      activityTrend,
      bonusStatus: bonusStatus.textContent,
      churnStatus: churnStatus.textContent,
      segmentStatus: segmentStatus.textContent,
    };

    // Add the newest review to the beginning of the saved reviews array
    savedReviews.unshift(review);

    // Store updated reviews in the browser so they remain after refresh
    localStorage.setItem("vipulseReviews", JSON.stringify(savedReviews));

    // Re-render the saved review cards on the page
    renderSavedReviews();
    updateDashboardCards();

    // Show success message after saving the review
    successMessage.classList.add("show");

    // Hide the message automatically after 3 seconds
    setTimeout(() => {
      successMessage.classList.remove("show");
    }, 3000);

    // Reset the form for the next review
    playerForm.reset();

    // Remove any previous validation styling
    clearValidation();
  });

  // Handles deleting one saved review card
  savedReviewsContainer.addEventListener("click", (event) => {
    if (!event.target.classList.contains("delete-btn")) {
      return;
    }

    const reviewId = Number(event.target.dataset.id);

    // Keep every review except the one with the matching delete button ID
    savedReviews = savedReviews.filter((review) => review.id !== reviewId);

    // Update localStorage after deleting the review
    localStorage.setItem("vipulseReviews", JSON.stringify(savedReviews));

    // Refresh the displayed cards
    renderSavedReviews();
    updateDashboardCards();
  });

  // Handles clearing all saved reviews
  clearReviewsButton.addEventListener("click", () => {
    savedReviews = [];

    // Remove all saved reviews from localStorage
    localStorage.removeItem("vipulseReviews");

    // Refresh the saved reviews section
    renderSavedReviews();
    updateDashboardCards();
  });

  // Updates saved review cards when the user types in the search field
  searchPlayerInput.addEventListener("input", renderSavedReviews);

  // Updates saved review cards when the VIP tier filter changes
  filterTierInput.addEventListener("change", renderSavedReviews);

  // Updates saved review cards when the churn risk filter changes
  filterChurnInput.addEventListener("change", renderSavedReviews);

  // Clears all search and filter inputs
  clearFiltersButton.addEventListener("click", () => {
    searchPlayerInput.value = "";
    filterTierInput.value = "";
    filterChurnInput.value = "";

    renderSavedReviews();
  });

  // Redirects users to a player profile using the global search bar
  if (globalSearchForm && globalPlayerSearch) {
    globalSearchForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const playerId = globalPlayerSearch.value.trim();

      if (!playerId) {
        return;
      }

      const savedReviews =
        JSON.parse(localStorage.getItem("vipulseReviews")) || [];

      const playerExists = savedReviews.some(
        (review) => review.playerId === playerId,
      );

      if (playerExists) {
        searchErrorMessage.classList.remove("show");

        window.location.href = `pages/profiles.html?player=${playerId}`;
      } else {
        searchErrorMessage.classList.add("show");

        setTimeout(() => {
          searchErrorMessage.classList.remove("show");
        }, 3000);
      }
    });
  }
  // Updates the text and styling class of a status badge
  function updateStatus(element, text, statusClass) {
    element.textContent = text;
    element.className = `status-badge ${statusClass}`;
  }

  // Creates saved review cards from the savedReviews array
  function renderSavedReviews() {
    const searchValue = searchPlayerInput.value.toLowerCase();
    const selectedTier = filterTierInput.value;
    const selectedChurn = filterChurnInput.value;

    // Filters saved reviews based on search text, VIP tier and churn risk
    const filteredReviews = savedReviews.filter((review) => {
      const matchesSearch = review.playerId.toLowerCase().includes(searchValue);

      const matchesTier =
        selectedTier === "" || review.vipTier === selectedTier;

      const matchesChurn =
        selectedChurn === "" || review.churnStatus === selectedChurn;

      return matchesSearch && matchesTier && matchesChurn;
    });

    // Show empty message if there are no saved reviews or no matching results
    if (filteredReviews.length === 0) {
      savedReviewsContainer.innerHTML = `
                <p class="empty-state">
                    No matching player reviews found.
                </p>
            `;
      return;
    }

    // Clear existing content before rendering updated cards
    savedReviewsContainer.innerHTML = "";

    // Create a card for each saved review
    filteredReviews.forEach((review) => {
      const card = document.createElement("article");
      card.classList.add("review-card");

      card.innerHTML = `
                <h4>${review.playerId}</h4>
                <div class="behaviour-tags">
    ${getBehaviourTags(review)}
</div>
                <p><strong>VIP Tier:</strong> ${review.vipTier}</p>
                <p><strong>Deposit:</strong> £${review.totalDeposit}</p>
                <p><strong>Wagering:</strong> ${review.wageringCompletion}%</p>
                <p><strong>Activity:</strong> ${review.activityTrend}</p>
                <p><strong>Bonus:</strong> ${review.bonusStatus}</p>
                <p><strong>Churn Risk:</strong> ${review.churnStatus}</p>

                <div class="card-actions">
                    <button class="btn btn-outline-danger delete-btn" data-id="${review.id}">
                        Delete
                    </button>
                </div>
            `;

      savedReviewsContainer.appendChild(card);
    });
  }

  // Updates the dashboard summary cards using saved review data
  function updateDashboardCards() {
    // Total saved player reviews
    activeVipsCount.textContent = savedReviews.length;

    // Players eligible for bonus review
    const bonusCount = savedReviews.filter(
      (review) => review.bonusStatus === "Eligible for review",
    ).length;

    bonusReviewsCount.textContent = bonusCount;

    // Players with high churn risk
    const churnCount = savedReviews.filter(
      (review) => review.churnStatus === "High risk",
    ).length;

    churnAlertsCount.textContent = churnCount;

    // Players requiring responsible gambling review
    const rgCount = savedReviews.filter(
      (review) => review.segmentStatus === "RG Review",
    ).length;

    rgReviewsCount.textContent = rgCount;
  }

  // Creates visual behaviour tags for each saved player review card
  function getBehaviourTags(review) {
    const tags = [];

    if (review.segmentStatus === "RG Review") {
      tags.push(`<span class="behaviour-tag danger">RG Review</span>`);
    }

    if (review.segmentStatus === "High Value") {
      tags.push(`<span class="behaviour-tag success">High Value</span>`);
    }

    if (review.segmentStatus === "Dormant") {
      tags.push(`<span class="behaviour-tag danger">Dormant</span>`);
    }

    if (review.segmentStatus === "Retention Risk") {
      tags.push(`<span class="behaviour-tag warning">Retention Risk</span>`);
    }

    if (review.bonusStatus === "Eligible for review") {
      tags.push(`<span class="behaviour-tag success">Bonus Eligible</span>`);
    }

    if (review.bonusStatus === "Recent bonus awarded") {
      tags.push(`<span class="behaviour-tag warning">Recent Bonus</span>`);
    }

    if (review.churnStatus === "High risk") {
      tags.push(`<span class="behaviour-tag danger">High Churn Risk</span>`);
    }

    if (tags.length === 0) {
      tags.push(`<span class="behaviour-tag neutral">Standard Review</span>`);
    }

    return tags.join("");
  }

  // Loads player profiles using saved review data
  function loadPlayerProfile() {
    const params = new URLSearchParams(window.location.search);
    const playerId = params.get("player");

    const profileTitle = document.getElementById("profile-title");
    const profileContent = document.getElementById("profile-content");

    const savedReviews =
      JSON.parse(localStorage.getItem("vipulseReviews")) || [];

    // Show all players when no player ID is provided
    if (!playerId) {
      profileTitle.textContent = "Player Profiles";

      if (savedReviews.length === 0) {
        profileContent.innerHTML = `
        <div class="empty-state-card">
            <h2>No player profiles found</h2>
            <p>Create your first VIP review from the dashboard to start managing players.</p>
            <a href="../index.html" class="btn submit-btn empty-state-btn">
                Go to Dashboard
            </a>
        </div>
    `;
        return;
      }

      profileContent.innerHTML = `
            <div class="profile-grid">
                ${savedReviews
                  .map(
                    (review) => `
                    <article class="profile-card">

                        <h3>${review.playerId}</h3>

                        <p><strong>VIP Tier:</strong> ${review.vipTier}</p>

                        <p><strong>Churn Risk:</strong> ${review.churnStatus}</p>

                        <p><strong>Bonus Status:</strong> ${review.bonusStatus}</p>

                       <div class="card-actions">

    <a
        href="profiles.html?player=${review.playerId}"
        class="btn submit-btn view-profile-btn">
        View Profile
    </a>

    <a
        href="customer-preview.html?player=${review.playerId}"
        class="btn btn-outline-light customer-preview-btn">
        Customer View
    </a>

</div>

                    </article>
                `,
                  )
                  .join("")}
            </div>
        `;

      return;
    }

    // Find one player using the player ID from the URL
    const player = savedReviews.find((review) => review.playerId === playerId);

    if (!player) {
      profileTitle.textContent = "Player not found";

      profileContent.innerHTML = `
            <p>Search for a player from the dashboard.</p>
        `;

      return;
    }

    profileTitle.textContent = `Player ${player.playerId}`;

    profileContent.innerHTML = `
        <div class="profile-card">

            <p><strong>VIP Tier:</strong> ${player.vipTier}</p>

            <p><strong>Total Deposit:</strong> £${player.totalDeposit}</p>

            <p><strong>Wagering Completion:</strong> ${player.wageringCompletion}%</p>

            <p><strong>Activity Trend:</strong> ${player.activityTrend}</p>

            <p><strong>Churn Risk:</strong> ${player.churnStatus}</p>

            <p><strong>Bonus Status:</strong> ${player.bonusStatus}</p>

        </div>
    `;
  }

  // Loads analytics data using saved review information
  function loadAnalyticsPage() {
    const savedReviews =
      JSON.parse(localStorage.getItem("vipulseReviews")) || [];

    const totalPlayers = document.getElementById("analytics-total-players");
    const bonusEligible = document.getElementById("analytics-bonus");
    const highChurn = document.getElementById("analytics-churn");
    const rgReviews = document.getElementById("analytics-rg");
    const tierBreakdown = document.getElementById("tier-breakdown");
    const behaviourBreakdown = document.getElementById("behaviour-breakdown");

    totalPlayers.textContent = savedReviews.length;

    bonusEligible.textContent = savedReviews.filter(
      (review) => review.bonusStatus === "Eligible for review",
    ).length;

    highChurn.textContent = savedReviews.filter(
      (review) => review.churnStatus === "High risk",
    ).length;

    rgReviews.textContent = savedReviews.filter(
      (review) => review.segmentStatus === "RG Review",
    ).length;

    const tierCounts = countBy(savedReviews, "vipTier");
    const behaviourCounts = countBy(savedReviews, "segmentStatus");

    tierBreakdown.innerHTML = createBreakdownRows(tierCounts, [
      "diamond",
      "platinum",
      "gold",
      "silver",
    ]);

    behaviourBreakdown.innerHTML = createBreakdownRows(behaviourCounts, [
      "RG Review",
      "Dormant",
      "Retention Risk",
      "High Value",
      "Standard Review",
    ]);
  }

  // Loads the customer preview for the selected player
  function loadCustomerPreview() {
    const params = new URLSearchParams(window.location.search);
    const playerId = params.get("player");

    const previewContainer = document.getElementById(
      "customer-preview-content",
    );

    const savedReviews =
      JSON.parse(localStorage.getItem("vipulseReviews")) || [];

    const player = savedReviews.find((review) => review.playerId === playerId);

    if (!player) {
      previewContainer.innerHTML = `
            <h2>Player not found</h2>
            <p>Please return to the Profiles page and select a player.</p>
        `;

      return;
    }
    const customerMessage = getCustomerMessage(player);
    const welcomeMessage = getWelcomeMessage(player.vipTier);

    previewContainer.innerHTML = `
    <article class="customer-card">

        <h2>Welcome back, Player ${player.playerId}</h2>

        <span class="customer-status">
            ${formatLabel(player.vipTier)} VIP Member
        </span>

        <p class="customer-intro">
    ${welcomeMessage}
</p>

        <div class="customer-divider"></div>

       <h3>Your Reward Status</h3>

<div class="customer-highlight">
    <p>
        ${customerMessage.status}
    </p>
</div>

        <div class="customer-divider"></div>

        <h3>Message from your VIP Team</h3>

        <p>
            ${customerMessage.message}
        </p>

        <div class="customer-help">

            <h4>Need assistance?</h4>

            <p>
                Please contact your VIP Manager for further support.
            </p>

        </div>

    </article>
`;
  }

  // Creates customer-friendly messaging based on saved review status
  function getCustomerMessage(player) {
    if (player.bonusStatus === "Eligible for review") {
      return {
        status:
          "Your account is currently eligible for a personalised VIP review.",
        message:
          "Thank you for your continued loyalty. Our VIP team regularly reviews player activity to provide tailored rewards and exclusive promotions.",
      };
    }

    if (player.bonusStatus === "Recent bonus awarded") {
      return {
        status: "You have recently received a VIP reward.",
        message:
          "Thank you for enjoying your recent reward. Keep engaging with your account to unlock future personalised offers.",
      };
    }

    if (player.bonusStatus === "Do not offer bonus") {
      return {
        status: "Your account is currently under review.",
        message:
          "Our team is reviewing your account activity. Please contact your VIP Manager if you need further support.",
      };
    }

    return {
      status: "You are not currently eligible for a personalised reward.",
      message:
        "Our VIP team regularly reviews player activity. Keep enjoying your experience and future rewards may become available.",
    };
  }

  // Creates a welcome message based on VIP tier
  function getWelcomeMessage(vipTier) {
    if (vipTier === "diamond" || vipTier === "platinum") {
      return "Thank you for being one of our most valued VIP members.";
    }

    return "Thank you for being part of our VIP programme.";
  }

  // Counts saved reviews by a selected property
  function countBy(reviews, key) {
    return reviews.reduce((counts, review) => {
      const value = review[key] || "Unknown";
      counts[value] = (counts[value] || 0) + 1;
      return counts;
    }, {});
  }

  // Creates rows for analytics breakdown sections
  function createBreakdownRows(data, preferredOrder = []) {
    const entries = Object.entries(data);

    if (entries.length === 0) {
      return `<p class="empty-state">No analytics data available yet.</p>`;
    }

    const sortedEntries =
      preferredOrder.length > 0
        ? preferredOrder
            .filter((label) => data[label])
            .map((label) => [label, data[label]])
        : entries;

    return sortedEntries
      .map(
        ([label, count]) => `
        <div class="breakdown-row">
            <span>${formatLabel(label)}</span>
            <strong>${count}</strong>
        </div>
    `,
      )
      .join("");
  }

  // Formats labels for display in analytics sections
  function formatLabel(label) {
    return label
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  // Displays Bootstrap validation styling
  function showValidationError(element) {
    element.classList.add("is-invalid");
  }

  // Removes validation styling from all form fields
  function clearValidation() {
    const invalidFields = document.querySelectorAll(".is-invalid");

    invalidFields.forEach((field) => {
      field.classList.remove("is-invalid");
    });
  }
});
