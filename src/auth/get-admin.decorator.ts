import { createParamDecorator, ExecutionContext, ForbiddenException } from "@nestjs/common";
import { User } from "src/users/entities/user.entity";




export const GetAdmin = createParamDecorator((_data, ctx: ExecutionContext): User => {
    const user: User = ctx.switchToHttp().getRequest().user;
    if (user.access_lvl < 2) {
        throw new ForbiddenException("Vous n'avez pas le niveau d'acces requis pour cette requête")
    }
    return user
})