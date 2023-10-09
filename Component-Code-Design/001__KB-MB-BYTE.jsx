<td className="col-span-1 text-sm text-gray-500">
  {f.size < 1024
    ? `${f.size.toFixed(2)} Byte`
    : f.size < 1024 * 1024
    ? `${(f.size / 1024).toFixed(2)} KB`
    : `${(f.size / (1024 * 1024)).toFixed(2)} MB`}
</td>;
