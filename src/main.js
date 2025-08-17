
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api.js";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions.js";

const form = document.querySelector(".form");

form.addEventListener("submit", async e => {
  e.preventDefault();

  const query = e.target.elements["search-text"].value.trim();

  if (!query) {
    iziToast.error({ message: "Please enter a search term!" });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query);
    if (data.hits.length === 0) {
      iziToast.error({ message: "Sorry, no images found. Try again!" });
      return;
    }
    createGallery(data.hits);
  } catch (error) {
    iziToast.error({ message: "Something went wrong!" });
  } finally {
    hideLoader();
  }
});
