// Ada function di dalam function

function lamarkerja(){
    const jabatan = 'Sofware Dev'

    function orangDalam (){
        let kenalan = `orang dalam bisa memasukkan ${jabatan}`;
        console.log(kenalan);
    }

    orangDalam();
}

lamarkerja();
// hasilnya akan undifine , namun jik orangDalam() didefinisikan di dalam scope maka akan tereksekusi functionnya.