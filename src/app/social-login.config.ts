import { SocialLoginModule,AuthServiceConfig,GoogleLoginProvider } from "angularx-social-login";

export function getAuthServiceConfigs() {
    let config = new AuthServiceConfig([{
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("476310390299-pvf5n4a0l7mk42vdv1bt86i1ug72dhkd.apps.googleusercontent.com")
    }]);
    
    return config;
}