export interface UserJwtController {
    just_created: boolean,
    id_token: string,
    user_profile: {
        id: number,
        login: string,
        email: string,
        firstName: string,
        lastName: string,
        activated: string,
        imageUrl: string,
    }
}
