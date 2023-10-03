import { LoaderFunctionArgs, redirect } from 'react-router-dom';

export function IndexRouteLoader({ request }: LoaderFunctionArgs) {
  if (new URL(request.url).pathname === '/') {
    return redirect('/home');
  }

  return null;
}
