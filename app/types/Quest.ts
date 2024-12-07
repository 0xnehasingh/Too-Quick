// types/Quest.ts
export interface Quest {
    id: string;
    title: string;
    description: string;
    points: number;
    requirements: {
      type: 'TRANSACTION' | 'NFT_MINT' | 'ENS_REGISTRATION';
      contractAddress?: string;
      minimumValue?: string;
    };
    completed: boolean;
  }