from pathlib import Path

import scrapy


class PhraseSpider(scrapy.Spider):
    name = "phrase"

    def start_requests(self):
        urls = [
            "https://quotes.toscrape.com/page/1/",
            "https://quotes.toscrape.com/page/2/",
            "https://quotes.toscrape.com/page/3/",
            "https://quotes.toscrape.com/page/4/",
            "https://quotes.toscrape.com/page/5/",
            "https://quotes.toscrape.com/page/6/",
            "https://quotes.toscrape.com/page/7/",
            "https://quotes.toscrape.com/page/8/",
        ]
        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        """ page = response.url.split("/")[-2]
        filename = f"blog-{page}.html"
        Path(filename).write_bytes(response.body)
        self.log(f"Saved file {filename}") """
        for phrase in response.css("div.quote"):
            yield {
                "text": phrase.css("span.text::text").get(),
                "author": phrase.css("small.author::text").get(),
                "tags": phrase.css("div.tags a.tag::text").getall(),
            }