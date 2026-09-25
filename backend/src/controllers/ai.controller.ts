import { generateContent } from "../services/ai.service.ts";
import { ApiError } from "../utils/ApiError.ts";
import { ApiResponse } from "../utils/ApiResponse.ts";
import { asyncHandler } from "../utils/AsyncHandler.ts";

export const aiController = asyncHandler(async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    throw new ApiError(400, "Prompt is required");
  }

  if (typeof prompt !== "string") {
    throw new ApiError(400, "Prompt must be a string");
  }

  const response = await generateContent(prompt);

  return res
    .status(200)
    .json(new ApiResponse(200, response, "Review generated successfully"));
});
