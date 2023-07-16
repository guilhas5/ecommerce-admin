"use client";

import useStoreModal from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";

const StoreModal = () => {
  const storeModal = useStoreModal();
  return (
    <Modal
      title="Create store"
      description="Add a new store to manage your products and categories"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      Create Store Form
    </Modal>
  );
};
export default StoreModal;
