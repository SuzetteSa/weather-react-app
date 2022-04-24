import React from "react";

export default function Search() {
  return (
    <form class="search-form" id="search-form">
      <div class="row">
        <div class="col-8">
          <input
            type="search"
            placeholder="Type a city.."
            autofocus="on"
            autocomplete="off"
            id="city-input"
            class="form-control shadow-sm"
          />
        </div>
        <div class="col-2">
          <input
            type="submit"
            value="Search"
            class="form-control btn btn-primary shadow-sm"
          />
        </div>
      </div>
    </form>
  );
}
