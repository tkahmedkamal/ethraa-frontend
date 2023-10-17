import { object, string } from "yup";

const postSchema = object({
  quote: string().required("post.quote.required"),
  quoteFor: string().min(3, "post.quoteFor.minLength"),
});

export default postSchema;
