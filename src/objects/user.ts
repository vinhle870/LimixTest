import { DataHandling } from "../data-handling/data-handling";

export default class User {
    /**
     * Get Dealer Login Account
     * @param user
     * @returns
     */
    initiateUserInfo(user: Record<string, string>): Record<string, string> {
        user['UserName'] = "UserName1";
        user['UserId'] = "UserId1";

        return user;
    }
}