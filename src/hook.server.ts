import { SvelteKitAuth } from '@auth/sveltekit';
import Credentials from '@auth/core/providers/credentials';
import Google from '@auth/core/providers/google';
import Facebook from '@auth/core/providers/facebook';

export const handle = SvelteKitAuth({
	providers: [Credentials({}), Google({}), Facebook({})]
});
