export const incomingMessage = (array) =>
  array.mainStore.messages.filter(
    (i) => i.status === "incoming"
  );

export const outcomingMessage = (array) =>
  array.mainStore.messages.filter(
    (i) => i.status === "outcoming"
  );

export const deletedMessages = (array) =>
    array.mainStore.messages.filter(
      (i) => i.status === "deleted"
    )