import { ADD_COMMENT } from "../Types/FakeBookType";

export const commentAction = (userComment) => ({
    type: ADD_COMMENT,
    userComment
})
