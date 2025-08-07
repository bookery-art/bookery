import { betterAuth } from 'better-auth'
import { D1Dialect } from '@atinux/kysely-d1'
import { anonymous, admin } from 'better-auth/plugins'

let _auth: ReturnType<typeof betterAuth>
export function serverAuth() {
    if (!_auth) {
        _auth = betterAuth({
            database: {
                dialect: new D1Dialect({
                    database: hubDatabase(),
                }),
            type: 'sqlite',
            },
            baseURL: getBaseURL(),
            emailAndPassword: {
                enabled: true,
            },
            socialProviders: {
                github: {
                clientId: process.env.GITHUB_CLIENT_ID!,
                clientSecret: process.env.GITHUB_CLIENT_SECRET!,
                },
            },
            account: {
                accountLinking: {
                enabled: true,
                },
            },
            plugins: [anonymous(), admin()],
        })
    }
    return _auth
}

function getBaseURL() {
    let baseURL = process.env.BETTER_AUTH_URL
    if (!baseURL) {
        try {
        baseURL = getRequestURL(useEvent()).origin
        }
        catch (e) {}
    }
    return baseURL
}