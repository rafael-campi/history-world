import models.Scanner  as Scanner
if __name__ == "__main__":
    scanner = Scanner()
    scanner.initialize()
    scanner.analise_numbers_datas()
    scanner.create_path()
    scanner.create_file()
    scanner.create_dashboard()
    scanner.finished()
