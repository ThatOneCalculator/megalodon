import generator, { NotificationType } from "megalodon";

declare let process: {
	env: {
		PLEROMA_ACCESS_TOKEN: string;
	};
};

const BASE_URL: string = "https://pleroma.io";

const access_token: string = process.env.PLEROMA_ACCESS_TOKEN;

const client = generator("pleroma", BASE_URL, access_token);

const excludes: Array<string> = [
	NotificationType.Follow,
	NotificationType.Favourite,
	NotificationType.Reblog,
	NotificationType.PollVote,
	NotificationType.PollExpired,
	NotificationType.EmojiReaction,
];

client
	.getNotifications({ min_id: "9318", limit: 30, exclude_types: excludes })
	.then((res) => console.log(res.data));
