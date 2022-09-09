import { rest } from "msw";

const baseURL = "https://gareth-moments-drf-api.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
				"pk": 1,
				"username": "gareth",
				"email": "",
				"first_name": "",
				"last_name": "",
				"profile_id": 1,
				"profile_image": "https://res.cloudinary.com/gmg-media-storage/image/upload/v1/media/../default_profile_gahzfl"
				})
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
