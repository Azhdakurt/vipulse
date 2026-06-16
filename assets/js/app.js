// Runs the JavaScript only after the full HTML page has loaded
document.addEventListener("DOMContentLoaded", () => {

    // Main form element used to collect player review data
    const playerForm = document.getElementById("player-review-form");

    // Recommendation panel elements that will be updated after form submission
    const bonusStatus = document.getElementById("bonus-status");
    const churnStatus = document.getElementById("churn-status");
    const segmentStatus = document.getElementById("segment-status");
    const recommendationText = document.getElementById("recommendation-text");
    const rgStatus = document.getElementById("rg-status");

    // Saved reviews section elements
    const savedReviewsContainer = document.getElementById("saved-reviews-container");
    const clearReviewsButton = document.getElementById("clear-reviews-btn");

    // Load existing saved reviews from localStorage, or start with an empty array
    let savedReviews = JSON.parse(localStorage.getItem("vipulseReviews")) || [];

    // Show any previously saved reviews when the page loads
    renderSavedReviews();

    // Runs when the user submits the player review form
    playerForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // Collect user input values from the form
        const playerId = document.getElementById("player-id").value.trim();
        const vipTier = document.getElementById("vip-tier").value;
        const totalDeposit = Number(document.getElementById("total-deposit").value);
        const wageringCompletion = Number(document.getElementById("wagering-completion").value);
        const lastActiveDays = Number(document.getElementById("last-active-days").value);
        const activityTrend = document.getElementById("activity-trend").value;
        const rgRisk = document.getElementById("rg-risk").checked;

        // Basic defensive validation to prevent invalid reviews
        if (
            !playerId ||
            !vipTier ||
            !activityTrend ||
            totalDeposit < 0 ||
            wageringCompletion < 0 ||
            wageringCompletion > 100 ||
            lastActiveDays < 0
        ) {
            recommendationText.textContent = "Please complete all required fields with valid values before running the VIP review.";
            return;
        }

        // If RG risk is selected, it overrides all bonus/retention recommendations
        if (rgRisk) {
            updateStatus(bonusStatus, "Do not offer bonus", "danger");
            updateStatus(churnStatus, "Manual review", "warning");
            updateStatus(segmentStatus, "RG Review", "danger");

            recommendationText.textContent = "Responsible gambling indicator is present. Do not offer promotional rewards. Escalate the player for manual safer gambling review.";
            rgStatus.textContent = "Responsible gambling review required.";

        } else {

            // Bonus eligibility logic based on wagering completion percentage
            if (wageringCompletion < 70) {
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
            if (lastActiveDays >= 14 || activityTrend === "inactive") {
                recommendationText.textContent = "Player shows inactivity risk. Recommend a retention follow-up before considering further bonus activity.";
            } else if (activityTrend === "decreasing") {
                recommendationText.textContent = "Player activity is decreasing. Recommend personalised engagement and review recent activity before offering rewards.";
            } else if (wageringCompletion < 70) {
                recommendationText.textContent = "Player has not completed wagering requirements. Bonus review should remain pending until wagering improves.";
            } else {
                recommendationText.textContent = "Player meets the basic review conditions. Proceed with manual VIP review based on internal policy.";
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
            segmentStatus: segmentStatus.textContent
        };

        // Add the newest review to the beginning of the saved reviews array
        savedReviews.unshift(review);

        // Store updated reviews in the browser so they remain after refresh
        localStorage.setItem("vipulseReviews", JSON.stringify(savedReviews));

        // Re-render the saved review cards on the page
        renderSavedReviews();
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
    });

    // Handles clearing all saved reviews
    clearReviewsButton.addEventListener("click", () => {
        savedReviews = [];

        // Remove all saved reviews from localStorage
        localStorage.removeItem("vipulseReviews");

        // Refresh the saved reviews section
        renderSavedReviews();
    });

    // Updates the text and styling class of a status badge
    function updateStatus(element, text, statusClass) {
        element.textContent = text;
        element.className = `status-badge ${statusClass}`;
    }

    // Creates saved review cards from the savedReviews array
    function renderSavedReviews() {

        // Show empty message if there are no saved reviews
        if (savedReviews.length === 0) {
            savedReviewsContainer.innerHTML = `
                <p class="empty-state">
                    No player reviews saved yet.
                </p>
            `;
            return;
        }

        // Clear existing content before rendering updated cards
        savedReviewsContainer.innerHTML = "";

        // Create a card for each saved review
        savedReviews.forEach((review) => {
            const card = document.createElement("article");
            card.classList.add("review-card");

            card.innerHTML = `
                <h4>${review.playerId}</h4>
                <p><strong>VIP Tier:</strong> ${review.vipTier}</p>
                <p><strong>Deposit:</strong> £${review.totalDeposit}</p>
                <p><strong>Wagering:</strong> ${review.wageringCompletion}%</p>
                <p><strong>Activity:</strong> ${review.activityTrend}</p>
                <p><strong>Bonus:</strong> ${review.bonusStatus}</p>

                <div class="card-actions">
                    <button class="btn btn-outline-danger delete-btn" data-id="${review.id}">
                        Delete
                    </button>
                </div>
            `;

            savedReviewsContainer.appendChild(card);
        });
    }
});