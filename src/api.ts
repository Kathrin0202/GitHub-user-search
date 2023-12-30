export const host = "https://api.github.com";

export interface ILogin {
  userName: string;
  sort?: string;
  perPage: number;
  page: number;
}

export async function getUsers({ userName, sort, perPage, page }: ILogin) {
  const response = await fetch(
    `${host}/search/users?q=${userName}&sort=repositories&order=${sort}&per_page=${perPage}&page=${page}`,
    {
      method: "GET",
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );
  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error("Такой пользователь не найден");
  }
}

export async function getUserCard(userName: string) {
  const response = await fetch(`${host}/users/${userName}`, {
    method: "GET",
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error("Такой пользователь не найден");
  }
}
