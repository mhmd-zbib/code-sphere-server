import { GraphQLResolveInfo } from "graphql";
import { userService } from "../../src/services/user/user.service";

export const usersResolver = {
  Query: {
    async users(
      _: any,
      args: Record<string, any>,
      context: any,
      info: GraphQLResolveInfo
    ) {
      return [];
    },
  },
};
