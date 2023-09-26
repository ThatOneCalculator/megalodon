import generator, { Entity, WebSocketInterface } from "megalodon";

declare let process: {
	env: {
		MASTODON_STREAMING_URL: string;
	};
};

const url: string = process.env.MASTODON_STREAMING_URL;

const client = generator("mastodon", url);

const stream: WebSocketInterface = client.localSocket();
stream.on("connect", () => {
	console.log("connect");
});

stream.on("pong", () => {
	console.log("pong");
});

stream.on("update", (status: Entity.Status) => {
	console.log(status);
});

stream.on("notification", (notification: Entity.Notification) => {
	console.log(notification);
});

stream.on("delete", (id: number) => {
	console.log(id);
});

stream.on("error", (err: Error) => {
	console.error(err);
});

stream.on("status_update", (status: Entity.Status) => {
	console.log("updated: ", status.url);
});

stream.on("heartbeat", () => {
	console.log("thump.");
});

stream.on("close", () => {
	console.log("close");
});

stream.on("parser-error", (err: Error) => {
	console.error(err);
});
