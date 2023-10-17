import { useTranslation } from "react-i18next";
import { Dropdown, DropdownBody, DropdownItem } from ".";
import { IPostState } from "../interfaces";

const PostState: React.FC<IPostState> = ({ handleState, state }) => {
  const { t } = useTranslation();

  return (
    <Dropdown>
      <Dropdown.Open name="post-state">
        <span className="flex w-20 cursor-pointer items-center gap-1 rounded-full bg-light-paper px-1 py-0.5 text-light-title dark:bg-dark-paper dark:text-dark-title">
          <span className="material-icons-outlined text-sm">
            {state === "public" ? "public" : "lock"}
          </span>
          <span className="select-none text-xs font-bold">
            {t(`global.${state}`)}
          </span>
          <span className="material-icons-outlined">arrow_drop_down</span>
        </span>
      </Dropdown.Open>

      <Dropdown.Content name="post-state">
        <DropdownBody>
          <DropdownItem
            label="global.public"
            icon="public"
            handler={() => handleState("public")}
          />
          <DropdownItem
            label="global.private"
            icon="lock"
            handler={() => handleState("private")}
          />
        </DropdownBody>
      </Dropdown.Content>
    </Dropdown>
  );
};

export default PostState;
