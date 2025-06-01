import { DataHandling } from "../data-handling/data-handling";
import User from "../objects/user";
import { Constants } from "../utilities/constants";

export class DataFactory {
    /**
     * Get User Info
     * @returns Record<string, string> | undefined
     */
    static async getLoginUserInfo(): Promise<Record<string, string> | undefined> {
        const user = await DataHandling.parseDataFromFile(Constants.USER_FILE_NAME);

        // Ensure user is valid and matches the expected type
        if (!user || typeof user !== 'object') {
            return undefined;
        }

        // Convert user to Record<string, string> if necessary
        const userRecord: Record<string, string> = Object.entries(user).reduce((acc, [key, value]) => {
            if (typeof key === 'string' && typeof value === 'string') {
                acc[key] = value;
            }
            return acc;
        }, {} as Record<string, string>);

        return new User().initiateUserInfo(userRecord);
    }
}