import ApiError from "../utils/api-error";

async function test(data: any) {
  if (!data) {
    throw ApiError.badRequest("Data is required");
  }
  return { message: "Post created successfully", data };
}

export const authService = {
  test,
};
