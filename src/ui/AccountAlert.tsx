import { useTranslation } from "react-i18next";
import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { Button, LoadingIcon } from ".";
import { verifyAccountTokenApi } from "../services/userApi";
import { useAuthCtx } from "../hooks";

const AccountAlert: React.FC = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const { user } = useAuthCtx();

  const { mutate: verifyAccountToken, isLoading } = useMutation({
    mutationFn: verifyAccountTokenApi,
    onSuccess: ({ message }) => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success(message);
    },
    onError: ({ message }) => {
      toast.error(message);
    },
  });

  return (
    <div className="text-md flex w-full items-start justify-center gap-2 border-b border-light-warning bg-light-warning/5 p-6 text-light-warning dark:border-dark-warning dark:bg-dark-warning/5 dark:text-dark-warning">
      {isLoading && (
        <span className="mb-0">
          <LoadingIcon variant="white" />
        </span>
      )}
      {t("alert.activeAccount")}
      <Button
        lite
        liteLabel="button.activeAccount"
        handler={() => verifyAccountToken(user?.language)}
      />
    </div>
  );
};

export default AccountAlert;
