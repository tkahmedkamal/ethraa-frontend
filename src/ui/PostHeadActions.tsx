import {
  Confirm,
  Dropdown,
  DropdownBody,
  DropdownItem,
  Modal,
  UpdatePostForm,
} from ".";
import { useCreateBookmark } from "../features/bookmark";
import useBookmarks from "../features/bookmark/useBookmarks";
import { useAuthCtx, useDeletePost } from "../hooks";
import { IPost, IPostHeadActions } from "../interfaces";

const PostHeadActions: React.FC<IPostHeadActions> = ({ postId, userId }) => {
  const { deletePost, isLoading } = useDeletePost();
  const { createBookmark } = useCreateBookmark();
  const { user: loggedInUser } = useAuthCtx();
  const { bookmarks } = useBookmarks();

  const isBookmarked = bookmarks?.pages
    .flatMap((page) => page.data)
    .flatMap((data) => data.post)
    ?.find((post: IPost) => post?._id === postId);

  return (
    <Modal>
      <Dropdown>
        <Dropdown.Open name="post-actions">
          <div className="cursor-pointer select-none rounded-full p-1 text-light-text transition-colors duration-500  dark:text-dark-text">
            <span className="material-icons-outlined block">more_horiz</span>
          </div>
        </Dropdown.Open>

        <Dropdown.Content name="post-actions">
          <DropdownBody>
            {userId !== loggedInUser?._id && (
              <DropdownItem
                label={`${isBookmarked ? "global.unSave" : "global.save"}`}
                icon={`${isBookmarked ? "bookmark" : "bookmark_border"}`}
                handler={() => createBookmark(postId as string)}
                large
              />
            )}

            {userId === loggedInUser?._id && (
              <>
                <Modal.Open label="edit-post">
                  <DropdownItem label="button.edit" icon="edit" large />
                </Modal.Open>

                <Modal.Open label="delete-post">
                  <DropdownItem label="button.delete" icon="delete" large />
                </Modal.Open>
              </>
            )}
          </DropdownBody>
        </Dropdown.Content>
      </Dropdown>

      <Modal.Content label="edit-post">
        <UpdatePostForm postId={postId} />
      </Modal.Content>

      <Modal.Content label="delete-post">
        <Confirm
          label="button.delete"
          text="confirm"
          btnActionLabel="button.delete"
          btnCloseLabel="button.cancel"
          loading={isLoading}
          handler={() => deletePost(postId as string)}
        />
      </Modal.Content>
    </Modal>
  );
};

export default PostHeadActions;
