import { getCurrentUser } from "aws-amplify/auth/server";
import { runAmplifyApi } from "../utils/amplify-utils";

export default defineEventHandler(async (event) => {
  const user = await runAmplifyApi(event, (contextSpec) =>
    getCurrentUser(contextSpec)
  ).catch((err) => ({
    error: "User is not authenticated",
  }));

  return user;
});
