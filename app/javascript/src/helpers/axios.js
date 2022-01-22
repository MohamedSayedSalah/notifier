import ax from 'axios'
import { getCSRFToken } from '@helpers/csrf_token'
ax.defaults.headers.common['X-CSRF-TOKEN'] = getCSRFToken()
export const axios = ax
