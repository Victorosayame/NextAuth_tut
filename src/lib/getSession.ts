import { auth } from "@/auth";
import { cache } from "react";

export default cache(auth);

//this doduplicate the request but only in a single server request
//when we refresh the page the cache is cleared and we fetch the session again,which is important because we always need the latest session data
//it is wastefull to make two databse request when we only need one