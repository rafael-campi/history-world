# useful for handling different item types with a single interface
from itemadapter import ItemAdapter
import os
import json
from datetime import datetime


class ScrapyPhrasesPipeline:
    def __init__(self):
        self.items = []
        self.file_count = 1
        self.items_per_file = 1000

    def open_spider(self, spider):
        self.items = []
        self.file_count = 1
        self.spider_directory = os.path.join('files', spider.name)
        os.makedirs(self.spider_directory, exist_ok=True)

    def close_spider(self, spider):
        if self.items:
            self._save_items_to_file(spider)

    def process_item(self, item, spider):
        self.items.append(dict(item))
        if len(self.items) >= self.items_per_file:
            self._save_items_to_file(spider)
        return item

    def _save_items_to_file(self, spider):
        timestamp = datetime.now().strftime('%Y%m%d%H%M%S%f')
        filename = os.path.join(self.spider_directory, f'phrase_{timestamp}_{self.file_count}.json')
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(self.items, f, ensure_ascii=False)
        self.file_count += 1
        self.items = []
