from pathlib import Path

import scrapy


class PensadorSpider(scrapy.Spider):
    name = "pensador"

    def start_requests(self):
        urls = [
        "https://www.pensador.com/frases_famosas/",
        "https://www.pensador.com/autor/platao/",
        "https://www.pensador.com/autor/platao/2/",
        "https://www.pensador.com/autor/platao/3/",
        "https://www.pensador.com/autor/platao/4/",
        "https://www.pensador.com/autor/platao/5/",
        "https://www.pensador.com/autor/platao/6/",
        "https://www.pensador.com/autor/platao/7/",
        ]
        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        for phrase in response.css(".thought-card"):
            yield {
                "phrase": phrase.css(".frase::text").get(),
                "author": phrase.css(".author-name::text").get(),
            }