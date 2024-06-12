"use client";

import { useEffect, useState } from "react";

import { CoverImageModal } from "@/components/modals/cover-image-modal";
import { SettingsModal } from "@/components/modals/settings-modal";

export const ModalProvider = () => {
  const [isMounted, setisMounted] = useState(false);
  useEffect(() => {
    setisMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <>
      <SettingsModal />
      <CoverImageModal />
    </>
  );
};
