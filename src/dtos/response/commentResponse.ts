import { CommentRequest } from "../request/commentRequest";

export interface CommentResponse extends  CommentRequest{
    ip_address_location : string
}