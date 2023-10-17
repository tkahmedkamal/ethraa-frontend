import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Form, Formik, FormikHelpers } from "formik";
import {
  Button,
  Card,
  FormControl,
  Input,
  PostState,
  PostUserInfo,
} from "../../ui";
import Textarea from "../../ui/Textarea";
import { Size } from "../../enums";
import { ICreatePost, IPostUserInfo } from "../../interfaces";
import postSchema from "./postSchema";
import { useAuthCtx } from "../../hooks";
import useCreatePost from "./useCreatePost";

const CreatePostForm: React.FC = () => {
  const [postState, setPostState] = useState<"public" | "private">("public");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { t } = useTranslation();
  const { user } = useAuthCtx();
  const { createPost, isLoading } = useCreatePost();

  const { name, username, avatar } = user || ({} as IPostUserInfo);

  const handleSubmit = (
    values: ICreatePost,
    actions: FormikHelpers<ICreatePost>,
  ) => {
    createPost(
      {
        ...values,
        isPublic: postState === "public",
      },
      {
        onSettled: () => {
          if (audioRef.current !== null) {
            audioRef.current.play();
          }
          document.body.click();
        },
      },
    );

    actions.resetForm();
  };
  const handlePostState = setPostState;

  return (
    <Card outlined>
      <PostUserInfo
        name={name}
        username={username}
        avatar={avatar}
        size={Size.LARGE}
      >
        <PostState handleState={handlePostState} state={postState} />
      </PostUserInfo>

      <Formik
        initialValues={{ quote: "", quoteFor: "" }}
        validationSchema={postSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <FormControl>
              <Textarea
                name="quote"
                placeholder={t("post.form.quote")}
                id="inputQuote"
              />
            </FormControl>

            <FormControl>
              <Input
                type="text"
                name="quoteFor"
                id="inputQuoteFor"
                placeholder={t("post.form.quoteFor")}
              />
            </FormControl>
            <Button type="submit" loading={isLoading}>
              {t("button.sharePost")}
            </Button>
          </Form>
        )}
      </Formik>

      <audio ref={audioRef}>
        <source src="share-sound.mp3" type="audio/mp3" />
      </audio>
    </Card>
  );
};

export default CreatePostForm;
