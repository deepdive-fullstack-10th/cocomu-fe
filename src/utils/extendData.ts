import { UserData } from '@customTypes/user';

export const extendData = (data: UserData[]) => {
  const mockingData = data;
  const dataLength = mockingData.length;
  const userIds = new Set();

  for (let i = 0; i < 30; i++) {
    const batchData = mockingData.map((item, index) => {
      let newId = item.id + (i + 1) * (dataLength * 30) + index;

      while (userIds.has(newId)) {
        newId += 5;
      }
      userIds.add(newId);

      return {
        ...item,
        id: newId,
      };
    });

    mockingData.push(...batchData);
  }

  return mockingData;
};
