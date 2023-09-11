export interface XPost {
    userPhoto: string;
    userFullName: string;
    username: string;
    content: string;
    timeOfPublished: string;
    comments: number;
    rePosts: number;
    favorites: number;
    imageAttachment?: string;
}