import bz2
import gzip as gz

def convertBz2ToGz(bz2_filename, gz_filename, chunk_size=1024 * 1024):
    """
    Convert a .bz2 file to a .gz file without decompressing the entire file, to disk.

    :param bz2_filename: Path to the source .bz2 file.
    :param gz_filename: Path to the target .gz file.
    :param chunk_size: Size of chunks to read and write (in bytes).
    """
    with bz2.BZ2File(bz2_filename, 'rb') as bz2_file, gz.open(gz_filename, 'wb') as gz_file:
        index = 0
        while True:
            chunk = bz2_file.read(chunk_size)
            if not chunk:
                break
            gz_file.write(chunk)
            index += 1
            if index%100==0: print(f'Chunk {index} write complete')

def readGz(gz_filename, txt_filename, chunk_size=1024 * 1024):
    with gz.open(gz_filename, 'rt', encoding='utf-8') as gz_file, open(txt_filename, 'w', encoding='utf-8') as txt_file:
        data = gz_file.read(chunk_size)
        txt_file.write(data)
    # print(data)


if __name__=='__main__':
    # Example usage
    bz2_file = 'latest-truthy.nt.bz2'  # Replace with your .bz2 file
    gz_file = 'latest-truthy.nt.gz'    # Replace with your desired .gz output file
    txt_file = 'file.txt'

    # convertBz2ToGz(bz2_file, gz_file)
    readGz(gz_file, txt_file)