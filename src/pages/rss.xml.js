import rss from "@astrojs/rss";
import { getCollection } from 'astro:content';

export async function GET() {
	const posts = await getCollection("posts");
	return rss({
		title: 'ndesmic Blog',
		site: "https://nl.ndesmic.com",
		description: "Ndesmic's blog of programming, video games and other stuff",
		items: posts.toSorted((a,b) => a.data.date - b.data.date).map(post => {
			return {
				title: post.data.title,
				link: `/posts/${post.slug}`,
				pubDate: post.data.date
			}
		}),
		customData: `<language>en-us</language>`,
	});
}