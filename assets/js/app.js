// Wait until the HTML document is fully loaded before running JavaScript
document.addEventListener("DOMContentLoaded", () => {
    const playerForm = document.getElementById("player-review-form");

    const bonusStatus = document.getElementById("bonus-status");
    const churnStatus = document.getElementById("churn-status");
    const segmentStatus = document.getElementById("segment-status");
    const recommendationText = document.getElementById("recommendation-text");
    const rgStatus = document.getElementById("rg-status");

    // Handle form submission
    playerForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const playerId = document.getElementById("player-id").value.trim();
        const vipTier = document.getElementById("vip-tier").value;
        const totalDeposit = Number(document.getElementById("total-deposit").value);
        const wageringCompletion = Number(document.getElementById("wagering-completion").value);
        const lastActiveDays = Number(document.getElementById("last-active-days").value);
        const activityTrend = document.getElementById("activity-trend").value;
        const rgRisk = document.getElementById("rg-risk").checked;

        // Basic validation to stop incomplete or invalid reviews
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

        // RG risk should override promotional recommendations
        if (rgRisk) {
            updateStatus(bonusStatus, "Do not offer bonus", "danger");
            updateStatus(churnStatus, "Manual review", "warning");
            updateStatus(segmentStatus, "RG Review", "danger");

            recommendationText.textContent = "Responsible gambling indicator is present. Do not offer promotional rewards. Escalate the player for manual safer gambling review.";
            rgStatus.textContent = "Responsible gambling review required.";

            return;
        }

        // Bonus eligibility logic
        if (wageringCompletion < 70) {
            updateStatus(bonusStatus, "Not eligible yet", "warning");
        } else {
            updateStatus(bonusStatus, "Eligible for review", "success");
        }

        // Churn risk logic
        if (lastActiveDays >= 14 || activityTrend === "inactive") {
            updateStatus(churnStatus, "High risk", "danger");
        } else if (activityTrend === "decreasing") {
            updateStatus(churnStatus, "Medium risk", "warning");
        } else {
            updateStatus(churnStatus, "Low risk", "success");
        }

        // Behaviour segment logic
        if (lastActiveDays >= 21 || activityTrend === "inactive") {
            updateStatus(segmentStatus, "Dormant", "danger");
        } else if (totalDeposit >= 5000 && wageringCompletion >= 70) {
            updateStatus(segmentStatus, "High Value", "success");
        } else if (activityTrend === "decreasing") {
            updateStatus(segmentStatus, "Retention Risk", "warning");
        } else {
            updateStatus(segmentStatus, "Standard Review", "neutral");
        }

        // Recommendation text logic
        if (lastActiveDays >= 14 || activityTrend === "inactive") {
            recommendationText.textContent = "Player shows inactivity risk. Recommend a retention follow-up before considering further bonus activity.";
        } else if (activityTrend === "decreasing") {
            recommendationText.textContent = "Player activity is decreasing. Recommend personalised engagement and review recent activity before offering rewards.";
        } else if (wageringCompletion < 70) {
            recommendationText.textContent = "Player has not completed wagering requirements. Bonus review should remain pending until wagering improves.";
        } else {
            recommendationText.textContent = "Player meets the basic review conditions. Proceed with manual VIP review based on internal policy.";
        }

        rgStatus.textContent = "No responsible gambling concerns identified.";
    });

    // Update badge text and style
    function updateStatus(element, text, statusClass) {
        element.textContent = text;
        element.className = `status-badge ${statusClass}`;
    }
});