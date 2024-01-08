"use strict";

// ELEMENT/S
const cardRatingsEl = document.querySelector(".card__ratings");
const userRatingEl = document.querySelector(".user-rating");
const submitRatingBtn = document.querySelector(".card__button");
const thankYouCard = document.querySelector(".card-2");

// DATA
let userRating;

// EVENT LISTENER/S
cardRatingsEl.addEventListener("click", function (event) {
	// Get rating
	const ratingEl = event.target.closest(".card__rating");

	// If user did not rate, exit
	if (!ratingEl) return;

	// Assign the rating to userRating variable
	userRating = ratingEl.textContent;
});

submitRatingBtn.addEventListener("click", function () {
	// If user did not select a rating, show alert then exit
	if (!userRating) {
		return alert("Please select a rating!");
	}

	// Add the rating value to userRatingEl
	userRatingEl.textContent = userRating;

	// Show thank you card
	thankYouCard.classList.add("show");
});
