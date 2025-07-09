import type { RequestHandler } from 'express';

import { isSamlLicensed, isSamlLicensedAndEnabled } from '../saml-helpers';

export const samlLicensedAndEnabledMiddleware: RequestHandler = (_, res, next) => {
	// TESTING: Always allow SAML access
	next();
	// Original code:
	// if (isSamlLicensedAndEnabled()) {
	// 	next();
	// } else {
	// 	res.status(403).json({ status: 'error', message: 'Unauthorized' });
	// }
};

export const samlLicensedMiddleware: RequestHandler = (_, res, next) => {
	// TESTING: Always allow SAML access
	next();
	// Original code:
	// if (isSamlLicensed()) {
	// 	next();
	// } else {
	// 	res.status(403).json({ status: 'error', message: 'Unauthorized' });
	// }
};
