import { Button, Confirm, Modal } from "../../../ui";
import DeactivateContentItem from "./DeactivateContentItem";
import useDeactivate from "./useDeactivate";

const DeactivateContent: React.FC = () => {
  const { deactivate, isLoading } = useDeactivate();

  return (
    <div className="divide-y divide-light-divider dark:divide-dark-divider">
      <DeactivateContentItem
        label="settings.deactivate.content.first.label"
        text="settings.deactivate.content.first.text"
      />

      <DeactivateContentItem
        label="settings.deactivate.content.second.label"
        text="settings.deactivate.content.second.text"
      />

      <DeactivateContentItem
        label="settings.deactivate.content.last.label"
        text="settings.deactivate.content.last.text"
      />

      <div className="py-4 text-center">
        <Modal>
          <Modal.Open label="deactivate">
            <Button lite danger liteLabel="button.deactivate" />
          </Modal.Open>

          <Modal.Content label="deactivate">
            <Confirm
              label="settings.deactivate.label"
              text="settings.deactivate.confirm"
              btnActionLabel="button.deactivate"
              btnCloseLabel="button.cancel"
              handler={() => deactivate()}
              loading={isLoading}
              danger
            />
          </Modal.Content>
        </Modal>
      </div>
    </div>
  );
};

export default DeactivateContent;
