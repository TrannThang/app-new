import nc from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import onError from "@/backend/middlewares/errors";
import upload from "@/backend/utils/multer";
import {
  authorizeRoles,
  isAuthenticatedUser,
} from "@/backend/middlewares/auth";
import { uploadProductImages } from "@/backend/controllers/productControllers";

const handler = nc({ onError });

dbConnect();

export const config = {
  api: {
    bodyParser: false,
  },
};

const updateMiddleware = upload.array("image");

handler
  .use(updateMiddleware, isAuthenticatedUser, authorizeRoles("admin"))
  .post(uploadProductImages);

export default handler;
