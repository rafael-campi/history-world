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
        for phrase in response.css("div.quote"):
            yield {
                "phrase": phrase.css(".frase .fr").get(),
                "author": phrase.css("small.author::text").get(),
            }