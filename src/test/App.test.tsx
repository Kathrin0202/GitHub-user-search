import { it, expect } from "@jest/globals";
import { chooseRepo } from "../components/filterContainer";
import { perPage } from "../pages/main";
import "@testing-library/jest-dom";
import searchSlices, {
  ISearch,
  setPageNumber,
  setSearchUser,
} from "../store/slices/searchSlices";

it("should check the contents of the choose", () => {
  const card = ["asc"];

  expect(chooseRepo).toContain("asc");
  expect(new Set(chooseRepo)).toContain("asc");
  expect(card).toContain("asc");
});

it("should length profiled at page", () => {
  expect(perPage).toBe(12);
});

describe("UserSearch reducer", () => {
  const initialState: ISearch = {
    userName: "",
    pageNumber: 1,
  };

  it("should handle setSearchUser", () => {
    const userName = "Kat";
    const action = setSearchUser(userName);
    const state = searchSlices(initialState, action);

    expect(state.userName).toBe(userName);
  });

  it("should handle setPageNumber", () => {
    const pageNumber = 1;
    const action = setPageNumber(pageNumber);
    const state = searchSlices(initialState, action);

    expect(state.pageNumber).toBe(pageNumber);
  });
});
