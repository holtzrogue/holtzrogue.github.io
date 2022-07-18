name = input("Enter file: ")
if len(name) < 1:
    name = "mbox-short.txt"
hand = open(name)
count = dict()
for lin in hand:
    words = lin.split()
    for w in words:
        if w == 'From':
            time = words[5]
            hour = (time.split(':'))[0]
            count[hour] = count.get(hour, 0) + 1

tmp = list()
for k, v in count.items():
    tmp.append((k, v))
    tmp = sorted(tmp)

for k, v in tmp:
    print(k, v)
