// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { sendMethodNotAllowed } from "@/utils/apiMethods";

export default function handler(req, res) {
  const isAllowedMethod = req.method === 'GET' || req.method === 'PUT' ||req.method === 'DELETE';

  if (!isAllowedMethod){
    return sendMethodNotAllowed(res, 'Method Not Allowed');
  }
}