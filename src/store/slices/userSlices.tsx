import { createSlice } from "@reduxjs/toolkit";

export interface IUser {
  login: string;
  id: number;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  received_events_url: string;
  type: string;
  score: number;
  following_url: string;
  gists_url: string;
  starred_url: string;
  events_url: string;
  site_admin: true;
}
export interface IUsers {
  total_count: number;
  incomplete_results: boolean;
  items: IUser[];
  details: IDetailedUser;
}
interface IDetailedUser {
  login: string;
  id: number;
  avatar_url: string;
  company: string | null;
  location: string | null;
  followers: number;
  created_at: number;
  html_url: string;
}

const initialState: IUsers = {
  total_count: 0,
  incomplete_results: true,
  items: [],
  details: {
    id: 0,
    avatar_url: "",
    login: "",
    location: "",
    followers: 0,
    html_url: "",
    created_at: 0,
    company: "",
  },
};

export const userSlices = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, action) => {
      const payload = action.payload ?? initialState;
      state.total_count = payload.total_count;
      state.incomplete_results = payload.incomplete_results;
      state.items = payload.items;
    },
    setUserDetails: (state, action) => {
      const payload = action.payload ?? initialState;
      state.details.avatar_url = payload.avatar_url;
      state.details.login = payload.login;
      state.details.location = payload.location
        ? payload.location
        : "Не указана";
      state.details.followers = payload.followers;
      state.details.created_at = payload.created_at;
      state.details.html_url = payload.html_url;
      state.details.company = payload.company ? payload.company : "Не указана";
    },
  },
});

export const { getUser, setUserDetails } = userSlices.actions;

export default userSlices.reducer;
