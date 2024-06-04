from pathlib import Path

import scrapy


class PensadorSpider(scrapy.Spider):
    name = "pensador"

    def start_requests(self):
        urls = [
        "https://www.pensador.com/frases_famosas/"
        ]
        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        for phrase in response.css(".thought-card"):
            yield {
                "phrase": phrase.css(".frase::text").get(),
                "author": phrase.css(".author-name::text").get(),
            }