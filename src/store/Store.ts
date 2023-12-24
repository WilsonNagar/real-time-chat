export type UserId = string;

export interface Chat {
    id: string;
    userId: UserId;
    name: string;
    message: string;
    upvotes: UserId[];

}

export abstract class Store {
    constructor() {

    }

    initRoom(roomId: string) { }
    getChats(roomId: string, limit: number, offset: number) { }
    addChat(roomId: string, chat: Chat) { }
    upvote(userId: UserId, roomId: string, chatId: string) { }
}